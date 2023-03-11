import React from 'react';
import { WebView, WebViewProps } from 'react-native-webview';

interface AppWebViewProps extends WebViewProps {}

function AppWebView(props: AppWebViewProps) {
  return <WebView {...props} />;
}

export default AppWebView;
