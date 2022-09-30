// hack of what the "bin" script is doing, but working within a js_binary.
const {runNodeJs} = require("@bufbuild/protoplugin");
const {protocGenEs} = require("@bufbuild/protoc-gen-es/dist/cjs/src/protoc-gen-es-plugin.js");

runNodeJs(protocGenEs);
