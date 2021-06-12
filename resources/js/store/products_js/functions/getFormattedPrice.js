export default function getFormattedPrice(price) {
    let priceStr = price;
    priceStr = priceStr.replace(/\s/g, ''); // удалить пробелы и внутри и снаружи
    priceStr = priceStr.replace(/[^0-9]/g, ''); // удалить все символы кроме цифр
    const len = priceStr.length-1;

    let spacedPrice='';
    let counter=0;
    for (let k = len; k >= 0; k--) {
        counter++;
        if ((counter % 3) === 0)
            spacedPrice = ' ' + priceStr[k] + spacedPrice;
        else
            spacedPrice = priceStr[k] + spacedPrice;
    }
    return spacedPrice.trim();
}
