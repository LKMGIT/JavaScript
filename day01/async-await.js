async function myName() {
    return 'echo';
}


async function showName() {
    const name = await myName();
    console.log(name);    
}

console.log(showName());