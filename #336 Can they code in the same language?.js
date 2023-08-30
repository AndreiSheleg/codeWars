const isSameLanguage = list => {
  let languageCode = list[0].language
  return list.every(el => el.language === languageCode)
}
