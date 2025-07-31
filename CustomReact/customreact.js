function CustomRender(reactElemnt,container)
{
    // const domElement=document.createElement(reactElemnt.type)
    // domElement.innerHTML=reactElemnt.Children
    // domElement.setAttribute('href',reactElemnt.props.href)
    // domElement.setAttribute('targetElement',reactElemnt.props.target)

    // container.appenchild(domElement)


    const domElement=document.createElement(reactElemnt.type)
    domElement.innerHTML=reactElemnt.Children
    for(const prop in reactElemnt.props)
    {
        if(prop==='children') continue;
        domElement.setAttribute(prop,reactElemnt.props,[prop])
    }
    container.appendChild(domElement)
}



const reactElemnt={
    type:'a',
    props:{
            href:'https://google.com',
            target:'_balnk'
    },
    Children:'click me to visit google'
}

const maincontainer=document.querySelector('#root')


CustomRender(reactElemnt,maincontainer)