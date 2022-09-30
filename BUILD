load("@aspect_rules_js//js:defs.bzl", "js_binary")
load("@build_stack_rules_proto//rules:proto_plugin.bzl", "proto_plugin")
load("@build_stack_rules_proto//rules:proto_compile.bzl", "proto_compile")
load("@npm//:defs.bzl", "npm_link_all_packages")

npm_link_all_packages(name = "node_modules")

# Working plugin binary, if you call it directly it waits for STDIN as expected.
js_binary(
    name = "protoc-gen-es",
    data = [
        ":bazel_tools/tools/bash/runfiles/runfiles.bash",
        "//:node_modules/@bufbuild/protobuf",
        "//:node_modules/@bufbuild/protoc-gen-es",
        "//:node_modules/@bufbuild/protoplugin",
    ],
    entry_point = "entry.js",
)

# This hack seemed necessary, but didn't fix the issue.
genrule(
    name = "hack_runfiles",
    srcs = ["@bazel_tools//tools/bash/runfiles"],
    outs = ["bazel_tools/tools/bash/runfiles/runfiles.bash"],
    cmd = "cp $< $@",
    output_to_bindir = True,
)

# Defining a plugin that uses the above binary.
proto_plugin(
    name = "es",
    options = ["target=ts"],
    tool = ":protoc-gen-es",
)

# Simple protobuf rule.
proto_library(
    name = "test_proto",
    srcs = ["test.proto"],
)

# Use the plugin to generate code.
proto_compile(
    name = "test_es_proto",
    outputs = [
        "test_pb.ts",
    ],
    plugins = [":es"],
    proto = ":test_proto",
)
