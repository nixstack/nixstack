#!/usr/bin/env sh
chown user:user /tmp -R
cd /opt/app
su user -c 'npm run bind'
