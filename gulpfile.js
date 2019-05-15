const gulp = require("gulp");
const typedoc = require("gulp-typedoc");

gulp.task("typedoc", function() {
  return gulp.src(["src/**/*.ts"]).pipe(
    typedoc({
      // TypeScript options (see typescript docs)
      module: "commonjs",
      target: "es5",
      includeDeclarations: false,

      // Output options (see typedoc docs)
      out: "./docs",
      mode: "modules",

      // TypeDoc options (see typedoc docs)
      name: "PLAY2D",
      theme: "minimal",
      plugins: "none",
      ignoreCompilerErrors: false,
      excludeExternals: true,
      exclude: "**/*+(.spec|.e2e).ts",
      readme: "./a.md",
      version: true
    })
  );
});
