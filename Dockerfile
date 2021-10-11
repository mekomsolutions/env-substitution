FROM node:16-alpine3.12
ENV FILE_PATH=/opt/env-replacer-node/files
RUN mkdir -p /opt/env-replacer-node
ADD ./cmd.js /opt/env-replacer-node
ENTRYPOINT [ "node", "/opt/env-replacer-node/cmd.js" ]