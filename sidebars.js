/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  sidebar: [
    "index",
    "user_guide",
    {
      type: "category",
      label: "Tracing",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "tracing" }],
      link: {
        type: "doc",
        id: "tracing/index",
      },
    },
    {
      type: "category",
      label: "Evaluation",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "evaluation" }],
      link: {
        type: "doc",
        id: "evaluation/index",
      },
    },
    {
      type: "category",
      label: "Production Monitoring & Automations",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "monitoring" }],
      link: {
        type: "doc",
        id: "monitoring/index",
      },
    },
    {
      type: "category",
      label: "Prompt Hub",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "hub" }],
      link: {
        type: "generated-index",
        description:
          "Discover, share, and version control prompts in the Prompt Hub.",
      },
    },
    {
      type: "category",
      label: "Proxy",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "proxy" }],
      link: {
        type: "generated-index",
        description: "Proxy your LLM calls to automatically Cache and Trace.",
      },
    },
    "pricing",
    {
      type: "category",
      label: "Self-Hosting",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "self_hosting" }],
      link: {
        type: "generated-index",
        description:
          "Self-hosting LangSmith requires an enterprise license. Check out the guides below for more information.",
      },
    },
    {
      type: "category",
      label: "Cookbook",
      collapsed: true,
      collapsible: true,
      items: [{ type: "autogenerated", dirName: "cookbook" }],
      link: {
        type: "generated-index",
        description:
          "Learn from hands-on code examples using LangSmith Cookbook.",
      },
    }
  ],
};
