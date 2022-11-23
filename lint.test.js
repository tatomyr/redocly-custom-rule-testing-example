const {
  lintDocument,
  lint,
  createConfig,
  Config,
  lintFromString,
  loadConfig,
} = require("@redocly/openapi-core");

test("lint", async () => {
  const problems = await lint({
    ref: "./fixtures/openapi.yaml",
    config: await loadConfig({ configPath: "./fixtures/redocly.yaml" }),
  });
  expect(problems.length).toEqual(1);
  expect(problems[0].ruleId).toEqual(
    "my-plugin/consistent-examples-for-responses"
  );
  expect(problems[0].location[0].pointer).toEqual(
    "#/paths/~1items/post/requestBody/content/application~1json/examples"
  );
});
