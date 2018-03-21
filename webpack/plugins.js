import fs from 'fs';
import path from 'path';
import glob from 'glob-all';
import webpackNotifierPlugin from 'webpack-notifier';
import webpackCleanupPlugin from 'webpack-cleanup-plugin';
import babelMinify from 'babel-minify-webpack-plugin';
import webpack from 'webpack';

module.exports = (production) => {
	const plugins = [
    (() => {
      if(!production) {
        return new webpackCleanupPlugin({
          preview: true,
        });
      }

      return () => {};
    })(),

    (() => {
      if(!production) {
        return new webpackNotifierPlugin();
      }

      return () => {};
    })(),

    new babelMinify()
  ];

  return plugins;
};

