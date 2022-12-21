function solve(input){
let length = input.shift()
let regEx = /^(.+)\>([0-9]{3})\|([a-z]{3})\|([A-Z]+)\|([^<>;]{3})\<\1$/

for (let line of input) {
    let match = regEx.exec(line)
    if(match){
        let password = match[2] + match[3] + match[4] + match[5]
        console.log(`Password: ${password}`);
    }else{
        console.log(`Try another password!`);
    }
    
}
}
solve((["3",
"##>00|no|NO|!!!?<###",
"##>123|yes|YES|!!!<##",
"$$<111|noo|NOPE|<<>$$"])
)
solve(["5",
"aa>111|mqu|BAU|mqu<aa",
"()>111!aaa!AAA!^&*<()",
"o>088|abc|AAA|***<o",
"asd>asd|asd|ASD|asd<asd",
"*>088|zzzz|ZzZ|123<*"])
