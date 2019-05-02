const redirect = (target) => {
    window.location.href = target;
    window.location.reload()
}

const getCurrentPage = () => window.location.href.split("/")[window.location.href.split("/").length - 1];

export {
    redirect,
    getCurrentPage
}