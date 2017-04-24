import component from './component.js';
component();


// HMR 接口 component文件的改变就可以热加载
if(process.env.NODE_ENV !== 'production'&&module.hot){
    module.hot.accept('./component',()=>{
        const nextComponent=component();
        document.body.replaceChild(nextComponent,demoComponent);
        demoComponent=nextComponent;
    });
}
