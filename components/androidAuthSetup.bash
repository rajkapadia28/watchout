openssl rand -base64 32 | openssl sha1 -c
keytool -exportcert -keystore path-to-debug-or-production-keystore -list -v

