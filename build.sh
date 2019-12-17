#!/bin/bash
set -e
sed "s/{@@WEBHOOKURL@@}/${WEB_HOOK_URL}/" index_base.html > index.html
sed "s/{@@CACHENAME@@}/${COMMIT_REF}/" serviceworker_base.js > serviceworker.js