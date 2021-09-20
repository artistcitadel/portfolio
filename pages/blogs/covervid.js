// import 'docs/src/modules/components/bootstrap';
// // --- Post bootstrap -----
// import React from 'react';
// import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

// const req = require.context('docs/src/pages/blogs/covervid', false, /\.md|\.js$/);
// const reqSource = require.context('!raw-loader!../../docs/src/pages/blogs/covervid', false, /\.js$/);
// const reqPrefix = 'pages/blogs/covervid';

// function Page() {
//   return <MarkdownDocs req={req} reqSource={reqSource} reqPrefix={reqPrefix} />;
// }

// export default Page;

import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';
import { prepareMarkdown } from 'docs/src/modules/utils/parseMarkdown';

const pageFilename = 'pages/blogs/covervid';
const requireDemo = require.context('pages/blogs/', false, /covervid\.(js|tsx)$/);
const requireRaw = require.context('!raw-loader!../../docs/src/pages/blogs/covervid/', false, /covervid\.(js|md|tsx)$/);

export default function Page({ demos, docs }) {
  // console.log("====================================");
  // console.log('pageFilename',pageFilename);
  // console.log('requireDemo',requireDemo);
  // console.log('requireRaw', requireRaw);
  // console.log('demo',demos, docs);
  return <MarkdownDocs demos={demos} docs={docs} requireDemo={requireDemo} />;
}

Page.getInitialProps = () => {
  // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
  const { demos, docs } = prepareMarkdown({ pageFilename, requireRaw });
  return { demos, docs };
};
