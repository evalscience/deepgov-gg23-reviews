# Local Data Setup

This folder contains JSON files that replace the GraphQL endpoint for local development and testing.

## Files

### `rounds.json`
Contains the rounds data with the following structure:
- `id`: Round identifier
- `chainId`: Blockchain chain ID
- `roundMetadata`: Contains round name and description
- `applicationsAggregate`: Contains count of approved applications

### `applications.json`
Contains the applications data organized by rounds with the following structure:
- Each round contains an array of applications
- Each application has:
  - `id`: Application identifier
  - `projectId`: Project identifier
  - `metadata.application.project`: Project details including title, description, images, and social links
  - `status`: Always "APPROVED" for this dataset
  - `chainId`: Blockchain chain ID
  - `roundId`: Associated round ID
  - `round`: Round metadata

## Usage

The `useApplications.ts` hook has been updated to use these local JSON files instead of making GraphQL queries. The data structure matches the expected format from the original Gitcoin API.

## Adding New Data

To add new rounds or applications:

1. **For new rounds**: Add entries to `rounds.json` following the existing structure
2. **For new applications**: Add entries to the appropriate round in `applications.json`

Make sure the `chainId` and round `id` values match between the files and are included in the `config.ts` rounds array.

## IPFS Images

The project uses IPFS hashes for images. The current setup includes placeholder IPFS hashes that will be served through the CloudFront gateway at `https://d16c97c2np8a2o.cloudfront.net/ipfs/`.

## Data Consistency

Ensure that:
- Round IDs in `applications.json` match those in `rounds.json`
- Chain IDs are consistent across both files
- All required fields are present in the project metadata
- Status is always "APPROVED" for visible applications 