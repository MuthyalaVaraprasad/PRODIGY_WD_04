const fs = require("fs");
const https = require("https");
const process = require("process");
require("dotenv").config();

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const dummyProfile = {
  data: {
    user: {
      name: "Developer",
      bio: "",
      avatarUrl: "",
      location: "",
      pinnedItems: {
        totalCount: 0,
        edges: []
      }
    }
  }
};

const dummyBlogs = {
  items: []
};

const writePlaceholderProfile = (reason) => {
  console.warn(`[Warning] ${reason}. Writing placeholder profile.json.`);
  try {
    fs.writeFileSync("./public/profile.json", JSON.stringify(dummyProfile, null, 2));
  } catch (err) {
    console.error("Error writing placeholder profile.json:", err);
  }
};

const writePlaceholderBlogs = (reason) => {
  console.warn(`[Warning] ${reason}. Writing placeholder blogs.json.`);
  try {
    fs.writeFileSync("./public/blogs.json", JSON.stringify(dummyBlogs, null, 2));
  } catch (err) {
    console.error("Error writing placeholder blogs.json:", err);
  }
};

if (USE_GITHUB_DATA === "true") {
  if (
    !GITHUB_TOKEN ||
    GITHUB_TOKEN === "YOUR GITHUB TOKEN HERE" ||
    !GITHUB_USERNAME ||
    GITHUB_USERNAME === "YOUR GITHUB USERNAME HERE"
  ) {
    writePlaceholderProfile("GitHub credentials not configured or still using default placeholders");
  } else {
    console.log(`Fetching profile data for ${GITHUB_USERNAME}`);
    const queryData = JSON.stringify({
      query: `
{
  user(login:"${GITHUB_USERNAME}") { 
    name
    bio
    avatarUrl
    location
    pinnedItems(first: 6, types: [REPOSITORY]) {
      totalCount
      edges {
          node {
            ... on Repository {
              name
              description
              forkCount
              stargazers {
                totalCount
              }
              url
              id
              diskUsage
              primaryLanguage {
                name
                color
              }
            }
          }
        }
      }
    }
}
`
    });

    const default_options = {
      hostname: "api.github.com",
      path: "/graphql",
      port: 443,
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        "User-Agent": "Node"
      }
    };

    const req = https.request(default_options, res => {
      let data = "";

      console.log(`GitHub API statusCode: ${res.statusCode}`);
      if (res.statusCode !== 200) {
        writePlaceholderProfile(`GitHub API returned status code ${res.statusCode}`);
        return;
      }

      res.on("data", d => {
        data += d;
      });
      res.on("end", () => {
        fs.writeFile("./public/profile.json", data, function (err) {
          if (err) return console.error("Error writing profile.json:", err);
          console.log("Saved file to public/profile.json");
        });
      });
    });

    req.on("error", error => {
      writePlaceholderProfile(`GitHub API request failed: ${error.message}`);
    });

    req.write(queryData);
    req.end();
  }
} else {
  writePlaceholderProfile("USE_GITHUB_DATA is not set to true");
}

if (
  MEDIUM_USERNAME &&
  MEDIUM_USERNAME !== "your-medium-username" &&
  MEDIUM_USERNAME !== "YOU MEDIUM USERNAME HERE"
) {
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);
  const options = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(options, res => {
    let mediumData = "";

    console.log(`Medium API statusCode: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      writePlaceholderBlogs(`Medium API returned status code ${res.statusCode}`);
      return;
    }

    res.on("data", d => {
      mediumData += d;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, function (err) {
        if (err) return console.error("Error writing blogs.json:", err);
        console.log("Saved file to public/blogs.json");
      });
    });
  });

  req.on("error", error => {
    writePlaceholderBlogs(`Medium API request failed: ${error.message}`);
  });

  req.end();
} else {
  writePlaceholderBlogs("Medium username is not configured or still using default placeholder");
}
