const users = [
{ name: "Abel", years: 43 },
{ name: "Maria", years: 18 },
{ name: "Pedro", years: 14 },
{ name: "Samantha", years: 32 },
{ name: "Raquel", years: 16 }];

for (const user of users) {
    console.log(user);
    user.years >= 18
        ? console.log("Usuario mayor de edad:${user.name}")

        : console.log("usuario menor de edad:${user.name}");

}
