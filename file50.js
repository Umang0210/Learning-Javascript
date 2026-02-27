function p1() {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve("P1 Resolved");
        }, 1000)
    })
}

function p2() {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            // Resolve("P2 Success");
            Reject("P2 Failed");
        }, 2000)
    })
}   

function p3() {
    return new Promise((Resolve, Reject) => {
        setTimeout(() => {
            Resolve("P3 Success");
        }, 3000)
    })  
}

async function main() {
    try {
        const result = await Promise.all([p1(), p2(), p3()]);
        console.log(result);
    } catch (e) {
        console.log(e);
    }
    
    const result = await Promise.all([p1(), p2(), p3()]);
    console.log(result);
}
