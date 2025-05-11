export function normalizeStrToId(str: string): string
{
    return String(str)
    .split(' ') // captilize each word
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ') // captilize each word
    .normalize("NFD") // Normalize accents (é → e, ç → c)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
    .replace(/\s+/g, "") // Replace spaces with "-"
    .replace(/[^\w-]/g, "") // Remove non-word characters (except "-")

}