#!/bin/bash
cd /home/kavia/workspace/code-generation/nutritrack-pro-94356-94363/nutritrack_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

