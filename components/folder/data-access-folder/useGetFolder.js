import { mapFolderData } from "@/components/folder/util-map";
import { useAsync } from "@/components/sharing/util";
import { axiosInstance } from "@/components/sharing/util";

export const useGetFolder = () => {
  const getFolder = () => axiosInstance.get("sample/folder");
  const { loading, error, data } = useAsync(getFolder);

  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
