import { createStylesServer, ServerStyles } from '@mantine/next';
import Document, { DocumentContext } from 'next/document';
import { rtlCache } from '../rtl-cache';

const stylesServer = createStylesServer(rtlCache);

export default class _Document extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles html={initialProps.html} server={stylesServer} key="styles" />
      ]
    };
  }
}