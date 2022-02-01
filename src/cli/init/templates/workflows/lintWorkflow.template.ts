import { createFile } from '../../../../utils/files';
import ProjectPath from '../../../../utils/ProjectPath';

const content = `
name: Lint

on:
  push:
    branches-ignore:
      - gh-pages
    paths:
      - '**.ts'
      - package.json
      - package-lock.json
      - tsconfig.json
      - .eslintrc.js
      - .github/workflows/lint.yml

jobs:
  lint:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout
      uses: actions/checkout@v2

    - name: Use Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14.x'

    - name: Install dependencies
      run: npm install

    - name: Analyze the coding style
      run: npm run lint:ci
`.substring(1);

export default function lintWorkflowTemplate(projectPath: ProjectPath) {
  createFile(projectPath.lintWorkflow, content);
}
