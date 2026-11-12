# Mbale Shopper

Mbale Shopper is a static HTML, CSS, and JavaScript marketplace demo. The current repository does not include an API server, authentication provider, or database.

## Run locally

Serve this directory over `http://localhost` (or HTTPS) rather than opening `index.html` directly. A secure context is required for service workers, camera barcode scanning, and some browser storage features. The app has no package installation or build step.

## Frontend prototype

- **Owner POS demo:** open “Owner POS demo” from the navigation. The POS opens full-screen with a daily overview, product search, a local basket, cash/transfer/split/credit entry, parked and resumable sales, printable receipt preview, customer debt records, and supplier bill capture. On phones, use the fixed basket bar to review and complete a sale; the POS sections are available from the menu button at the left of the header. Keyboard shortcuts: **F2** focuses product search, **F4** cycles payment types, **Enter** adds an exact product/barcode match, and **Ctrl+Enter** completes a sale.
- **Staff portal demo:** open “Staff portal demo” to switch between sample businesses, edit catalog prices/costs/stock/barcodes, activate sample catalog entries, review uploaded bills, update local storefront orders, inspect heuristic alerts and summaries, and publish owner advice.
- **Business storefront preview:** open the POS and select “Store preview”. The route is `/shop/<business-slug>` and is generated from that business’s active sample products.
- **Offline shell and records:** the PWA manifest and service worker cache the app shell. POS sales, online orders, and supplier bill files are stored in IndexedDB when available. They remain on this browser and are marked as pending backend sync; reconnecting does not transmit them.

All POS, staff, and storefront workspaces are prototypes. Business selection is not authorization, browser records are not tamper-proof, prices/inventory are sample data, and no money, messages, invoices, or customer data are sent to a service. Transfer/card entries are unverified until manually reviewed in the demo staff portal. The connection indicator shows pending local records; getting back online does not sync them. A static host must route `/shop/<business-slug>` requests back to `index.html` for direct links and refreshes to work.

## Production work still required

Before using real businesses, add a server API and database, authenticated owner/staff roles, server-enforced business isolation, transactional inventory and payment ledgers, durable backup, invoice object storage, audit controls, and a tested offline synchronization protocol. Payment, SMS/WhatsApp, and hardware-printer integrations are intentionally not connected.
