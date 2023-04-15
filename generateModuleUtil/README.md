## **Generate Module Util**
**This utility allows you to generate module files with the following architectural style:**

***ModuleName folder which include***

**index.ts**

    import ModuleName from './ModuleName';
    export { ModuleName };

**ModuleName.module.scss**

    empty file

**ModuleName.tsx**

    import React from 'react';
    import styles from './ModuleName.module.scss';
    const ModuleName = () => {
      return <div>ModuleName</div>
    };
    export default ModuleName;

**To use this util:** </br>
node generateModuleUtil/generateModule **PathForModule ModuleName**

**For example** </br>
node generateModuleUtil/generateModule **layouts/MainLayout MainLayoutHeader**