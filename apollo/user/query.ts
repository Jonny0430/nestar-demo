import { gql } from "@apollo/client";

/******************
 *     PROPERTY   *
 ******************/

export const GET_PROPERTIES = gql`
  query GetProperties($input: PropertiesInquiry!) {
    getProperties(input: $input) {
      metaCounter {
        total
      }
      list {
        _id
        propertyType
        propertyStatus
        propertyLocation
        propertyAddress
        propertyTitle
        propertyPrice
        propertySquare
        propertyBeds
        propertyRooms
        propertyViews
        propertyLikes
        propertyComments
        propertyRank
        propertyImages
        propertyDesc
        propertyBarter
        propertyRent
        memberId
        soldAt
        createdAt
        deletedAt
        constructedAt
        updatedAt
        meLiked {
          memberId
          likeRefId
          myFavorite
        }
      }
    }
  }
`;
