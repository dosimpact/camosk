import { Adeo } from "../../models/Adeo";

//=================================
//             adeo controller
//=================================

export const createAdeoDB = async (params) => {
  const {
    url,
    keywords,
    title,
    shortDescription,
    thumbnails,
    author,
    related_videos,
  } = params;

  try {
    const result = await new Adeo({
      url,
      keywords,
      title,
      shortDescription,
      thumbnails,
      author,
      related_videos,
    }).save();

    console.log("addInfoDB result", result);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
};
