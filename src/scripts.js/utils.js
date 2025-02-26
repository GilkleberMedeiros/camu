export function normalizeStrToId(str)
{
    return String(str).normalize("NFD") // Normalize accents (é → e, ç → c)
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (accents)
    .replace(/\s+/g, "") // Replace spaces with "-"
    .replace(/[^\w-]/g, "") // Remove non-word characters (except "-")

}