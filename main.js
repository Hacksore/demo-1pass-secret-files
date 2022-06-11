import "dotenv/config";

const { ACME_API_KEY } = process.env;

function main() {
  if (!ACME_API_KEY) {
    throw new Error("ACME_API_KEY is required to run the app!");
  }

  console.log("Hello this is a nice app!");
  console.log("ACME_API_KEY:", ACME_API_KEY);
}

main(); // run the app
