# CircleCIの使い方

## 導入手順

1. `.circleci/config.yml`を作成

```
.circleci/
`-- config.yml
```
2. configの中身

```
version: 2
jobs:
  build:
    docker:
      - image: circleci/node:7.10

    working_directory: ~/repo

    steps:
      - checkout

      - restore_cache:
          keys:
          - v1-dependencies-{{ checksum "package.json" }}
          - v1-dependencies-

      - run: yarn install

      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package.json" }}
        
      - run: yarn test
```

3. テスト用のライブラリを導入

```
yarn add mocha
yarn add dependencies
```

4. package.jsonを更新

```
"scripts": {
    "test": "mocha"
  },
```
を追加

5. githubにpush

6. CircleCIからリポジトリをSet UP

[https://circleci.com](https://circleci.com)
に行き、

`ADD_PROJECT`

がしたpushしたリポジトリをset up

start buildingをクリック


## 使い方
githubにpushするだけで、ビルドができる

## READMEにバッジを貼る方法

`status Badge`から、`Embed Code`の中身をREADMEにコピペ

