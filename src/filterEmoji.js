import faceemojiList from "./faceemojiList.json";
import otheremojiList from "./otheremojiList.json";

export default function filterEmoji( emojitype, searchText, maxResults) {
    if( emojitype == 1) {
      return faceemojiList
        .filter(emoji => {
          if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
          }
          if (emoji.keywords.includes(searchText)) {
            return true;
          }
          return false;
        })
        .slice(0, maxResults);
    }else{
      return otheremojiList
      .filter(emoji => {
        if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
          return true;
        }
        if (emoji.keywords.includes(searchText)) {
          return true;
        }
        return false;
      })
      .slice(0, maxResults);
    }
}
