export default {
    set(token) {
        //<meta name="csrf-token" content="{{ csrf_token() }}">
        document.querySelector('meta[name="csrf-token"]').content = token;
        },
    get() {
        //console.log(document.querySelector('meta[name="csrf-token"]').content);
        return document.querySelector('meta[name="csrf-token"]').content;
    }
}

