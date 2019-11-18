export const Url = (hash) => {
    window.location.hash = `|${hash}`;
};
export const Title = (hash) => {
    let title = document.title.split('|')[0];
    document.title = `${title}|${hash}`;
};