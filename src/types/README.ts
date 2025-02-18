import { FromSchema } from "json-schema-to-ts";

const ReadmeSchema = {
    "title": "Content File",
    "description": "Content File",
    "type": "object",
    "properties": {
        "type": {
            "type": "string",
            "enum": [
                "file"
            ]
        },
        "encoding": {
            "type": "string"
        },
        "size": {
            "type": "integer"
        },
        "name": {
            "type": "string"
        },
        "path": {
            "type": "string"
        },
        "content": {
            "type": "string"
        },
        "sha": {
            "type": "string"
        },
        "url": {
            "type": "string",
            "format": "uri"
        },
        "git_url": {
            "type": [
                "string",
                "null"
            ],
            "format": "uri"
        },
        "html_url": {
            "type": [
                "string",
                "null"
            ],
            "format": "uri"
        },
        "download_url": {
            "type": [
                "string",
                "null"
            ],
            "format": "uri"
        },
        "_links": {
            "type": "object",
            "properties": {
                "git": {
                    "type": [
                        "string",
                        "null"
                    ],
                    "format": "uri"
                },
                "html": {
                    "type": [
                        "string",
                        "null"
                    ],
                    "format": "uri"
                },
                "self": {
                    "type": "string",
                    "format": "uri"
                }
            },
            "required": [
                "git",
                "html",
                "self"
            ]
        },
        "target": {
            "type": "string",
            "examples": [
                "\"actual/actual.md\""
            ]
        },
        "submodule_git_url": {
            "type": "string",
            "examples": [
                "\"git://example.com/defunkt/dotjs.git\""
            ]
        }
    },
    "required": [
        "_links",
        "git_url",
        "html_url",
        "download_url",
        "name",
        "path",
        "sha",
        "size",
        "type",
        "url",
        "content",
        "encoding"
    ]
} as const;

type ReadmeType = FromSchema<typeof ReadmeSchema>;
export default ReadmeType;