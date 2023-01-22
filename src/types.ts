export type SearchResult = {
  identifier: string;  
  title: string;
  link: string;
  subject: string;
  description: string;
  date: string;
  premium: number;
  image_url: string;
  teaser_image_urls: TeaserImageUrl[]
}

type TeaserImageUrl = {
  width: number;
  src: string;
}

// <Route exact path={`/${TEST}/:objectID`} element={<div><h1>hallo</h1><Outlet /></div>}>
//           <Route exact path="" element={subFragment(<ObjectActionsPanel />)}>
//             <Route exact path="edit" element={<TestEditorPanel />} />
//           </Route>
//           <Route exact path="room" element={<TestRoomView />} />
//         </Route>