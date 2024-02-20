import { useGetFolders } from "@/components/folder/data-access-folder";
import { useGetLinks } from "@/components/link/data-access-link";
import { Layout } from "@/components/sharing/feature-layout";
import { FolderLayout } from "@/components/page-layout/FolderLayout";
import { FolderToolBar } from "@/components/folder/feature-folder-tool-bar";
import { SearchBar } from "@/components/link/ui-search-bar";
import { useState } from "react";
import { ALL_LINKS_ID } from "@/components/link/data-access-link/constant";
import { LinkForm } from "@/components/link/feature-link-form";
import { CardList } from "@/components/link/feature-card-list";

export const FolderPage = () => {
  const { data: folders } = useGetFolders();
  const [selectedFolderId, setSelectedFolderId] = useState(ALL_LINKS_ID);
  const { data: links, loading } = useGetLinks(selectedFolderId);

  return (
    <Layout isSticky={false}>
      <FolderLayout
        linkForm={<LinkForm />}
        searchBar={<SearchBar />}
        folderToolBar={
          <FolderToolBar
            folders={folders}
            selectedFolderId={selectedFolderId}
            onFolderClick={setSelectedFolderId}
          />
        }
        cardList={loading ? null : <CardList links={links} />}
      />
    </Layout>
  );
};

export default FolderPage;
