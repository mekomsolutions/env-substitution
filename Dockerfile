FROM node:16-alpine3.12
ENV FILE_PATH=/opt/env-substitution/files
RUN mkdir -p /opt/env-substitution
ADD ./cmd.js /opt/env-substitution
ENTRYPOINT [ "node", "/opt/env-substitution/cmd.js" ]
