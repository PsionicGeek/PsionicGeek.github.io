const https = require('https');

const testSlug = (slug) => {
  return new Promise((resolve) => {
    https.get(`https://cdn.simpleicons.org/${slug}`, (res) => {
      resolve(`${slug}: ${res.statusCode}`);
    }).on('error', (e) => resolve(`${slug}: ${e.message}`));
  });
};

async function run() {
  const slugs = [
    'java', 'openjdk', 'oracle', 
    'csharp', 'dotnet', 'c', 
    'amazonaws', 'amazonwebservices', 'aws', 
    'visualstudiocode', 'vscode', 'visualstudio'
  ];
  for (const slug of slugs) {
    console.log(await testSlug(slug));
  }
}

run();
