export default function(context) {
    let user = this.$auth.user.role;
    console.log(user)

    if (user != "admin") {
        return context.redirect("/");
    }
}
