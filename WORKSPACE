load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "rules_proto",
    sha256 = "80d3a4ec17354cccc898bfe32118edd934f851b03029d63ef3fc7c8663a7415c",
    strip_prefix = "rules_proto-5.3.0-21.5",
    urls = [
        "https://github.com/bazelbuild/rules_proto/archive/refs/tags/5.3.0-21.5.tar.gz",
    ],
)

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

http_archive(
    name = "aspect_rules_js",
    sha256 = "0707a425093704fab05fb91c3a4b62cf22dca18ea334d8a72f156d4c18e8db90",
    strip_prefix = "rules_js-1.3.1",
    url = "https://github.com/aspect-build/rules_js/archive/refs/tags/v1.3.1.tar.gz",
)

load("@aspect_rules_js//js:repositories.bzl", "rules_js_dependencies")

rules_js_dependencies()

load("@rules_nodejs//nodejs:repositories.bzl", "DEFAULT_NODE_VERSION", "nodejs_register_toolchains")

nodejs_register_toolchains(
    name = "nodejs",
    node_version = DEFAULT_NODE_VERSION,
)

load("@aspect_rules_js//npm:npm_import.bzl", "npm_translate_lock")

npm_translate_lock(
    name = "npm",
    pnpm_lock = "//:pnpm-lock.yaml",
    verify_node_modules_ignored = "//:.bazelignore",
)

load("@npm//:repositories.bzl", "npm_repositories")

npm_repositories()

http_archive(
    name = "build_stack_rules_proto",
    sha256 = "1190c296a9f931343f70e58e5f6f9ee2331709be4e17001bb570e41237a6c497",
    strip_prefix = "rules_proto-7c95feba87ae269d09690fcebb18c77d8b8bcf6a",
    urls = ["https://github.com/stackb/rules_proto/archive/7c95feba87ae269d09690fcebb18c77d8b8bcf6a.tar.gz"],
)

register_toolchains("@build_stack_rules_proto//toolchain:standard")
