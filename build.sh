#!/bin/bash
sed "s/{@@WEBHOOKURL@@}/${WEB_HOOK_URL}/" index_base.html > index.html
sed "s/{@@CACHENAME@@}/${BUILD_ID}/" serviceworker_base.js > serviceworker.js