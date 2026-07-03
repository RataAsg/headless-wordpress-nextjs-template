import { gql } from "@apollo/client";
import client from "@/lib/apollo-client";
import { MenuItem, MenuResponse } from "@/lib/types/menu";

const GET_MENU_BY_LOCATION = gql`
  query GetMenuByLocation($id: ID!, $idType: MenuNodeIdTypeEnum!) {
    menu(id: $id, idType: $idType) {
      id
      name
      menuItems {
        nodes {
          id
          label
          url
          path
          parentId
        }
      }
    }
  }
`;

export async function getMenuByLocation(location: string): Promise<MenuItem[]> {
  try {
    const response = await client.query({
      query: GET_MENU_BY_LOCATION,
      variables: {
        id: location,
        idType: "LOCATION",
      },
    });

    const responseData = response.data as MenuResponse;
    const menu = responseData.menu;

    // Check if the menu and its items exist in the response
    if (!menu || !menu.menuItems) {
      console.warn(`No menu found or menu items are empty for location: ${location}`);
      return []; // Return empty array if no menu or items are found
    }

    return menu.menuItems.nodes;
  } catch (error) {
    console.error(`Error fetching menu for location ${location}:`, error);
    // Return an empty array to gracefully handle the missing menu in the UI
    return [];
  }
}
