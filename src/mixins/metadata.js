/**
 * This source file is part of the Swift.org open source project
 *
 * Copyright (c) 2021 Apple Inc. and the Swift project authors
 * Licensed under Apache License v2.0 with Runtime Library Exception
 *
 * See https://swift.org/LICENSE.txt for license information
 * See https://swift.org/CONTRIBUTORS.txt for Swift project authors
*/

import { addOrUpdateMetadata } from 'docc-render/utils/metadata';
import { firstParagraph } from 'docc-render/utils/strings';
import ContentNode from 'docc-render/components/ContentNode.vue';

export default {
  methods: {
    // Extracts the first paragraph of plaintext from the given content tree,
    // which can be used for metadata purposes.
    extractFirstParagraphText(content = []) {
      const plaintext = ContentNode.computed.plaintext.bind({
        ...ContentNode.methods,
        content,
      })();
      return firstParagraph(plaintext);
    },
  },
  computed: {
    pagePath: ({ $route: { path = '/' } = {} }) => path,
  },
  mounted() {
    addOrUpdateMetadata({
      title: this.pageTitle,
      description: this.pageDescription,
      path: this.pagePath,
    });
  },
};
