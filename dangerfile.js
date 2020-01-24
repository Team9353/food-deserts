import {danger, fail, message, schedule, warn} from "danger";

if (!danger.github.pr.body.includes("#trivial") && danger.github.pr.body.length < 100) {
    fail("The pull request description must be longer.  Include #trivial to override this.")
}

const client = danger.git.fileMatch("client/**");
if (client.edited) {
    schedule(danger.git.JSONDiffForFile("client/package.json").then(diff => {
        if (diff) {
            if (!diff.version) {
                fail("The client files were modified; please update the client version.", "client/package.json");
            }
            if (diff.dependencies || diff.devDependencies) {
                message("This pull request includes client dependency changes.", {icon: "triangular_flag_on_post"})
            }
        }
    }));
}

const server = danger.git.fileMatch("server/**");
if (server.edited) {
    schedule(danger.git.JSONDiffForFile("server/package.json").then(diff => {
        if (diff) {
            if (!diff.version) {
                fail("The server files were modified; please update the server version.", "server/package.json");
            }
            if (diff.dependencies || diff.devDependencies) {
                message("This pull request includes server dependency changes.", {icon: "triangular_flag_on_post"})
            }
        }
    }));
}

const root = danger.git.fileMatch("./*");
if (root.edited) {
    schedule(danger.git.JSONDiffForFile("./package.json").then(diff => {
        if (diff) {
            if (diff.dependencies || diff.devDependencies) {
                warn("This pull request includes dependency changes in the root `package.json`.  Is this intentional?");
            }
        }
    }));
}
