#!/bin/bash
set -e
sed "s|{@@WEBHOOKURL@@}|${WEB_HOOK_URL}|g" index_base.html > www/index.html
sed "s|{@@CACHENAME@@}|${COMMIT_REF}|g" serviceworker_base.js > www/serviceworker.js