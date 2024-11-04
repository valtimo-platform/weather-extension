/*
 * Copyright 2015-2022 Ritense BV, the Netherlands.
 *
 * Licensed under EUPL, Version 1.2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://joinup.ec.europa.eu/collection/eupl/eupl-text-eupl-12
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const WEATHER_PLUGIN_LOGO_BASE64 =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNjRweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA2NCA2NCIgd2lkdGg9IjY0cHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+CiAgIDwhW0NEQVRBWwogICAgLmZpbDEge2ZpbGw6IzFBQjVFRH0KICAgIC5maWwwIHtmaWxsOiNGRkMxMDZ9CiAgICAuZmlsMiB7ZmlsbDojRkZDMTA2O2ZpbGwtcnVsZTpub256ZXJvfQogICBdXT4KICA8L3N0eWxlPjwvZGVmcz48ZyBpZD0iTGF5ZXJfeDAwMjBfMSI+PGcgaWQ9Il83NDM3NTA3ODQiPjxwYXRoIGNsYXNzPSJmaWwwIiBkPSJNNDEuMjcgMTguNjZjNi44OSwxLjg0IDEwLjk4LDguOTIgOS4xMywxNS44MSAtMC42NSwyLjQzIC0xLjk1LDQuNTEgLTMuNjYsNi4xMSAtMS41MSwtMi43OSAtNC40NSwtNC42OCAtNy44NCwtNC42OCAtMC41NSwwIC0xLjA5LDAuMDQgLTEuNjEsMC4xNCAtMS44MiwtNC44IC02LjM5LC04LjI1IC0xMS43OSwtOC40MiAxLjkyLC02Ljc5IDguOTQsLTEwLjc5IDE1Ljc3LC04Ljk2eiIvPjxwYXRoIGNsYXNzPSJmaWwxIiBkPSJNMTIuMjkgNTMuNzFsLTAuMSAwYy0zLjg1LDAgLTYuOTcsLTMuMTEgLTYuOTcsLTYuOTYgMCwtMy44MSAzLjA1LC02LjkgNi44NSwtNi45NyAwLjQ1LC02LjggNi4xLC0xMi4xNyAxMy4wMiwtMTIuMTcgNS41OCwwIDEwLjM0LDMuNSAxMi4yLDguNDMgMC41MiwtMC4xIDEuMDYsLTAuMTQgMS42MSwtMC4xNCA0LjUyLDAgOC4yNywzLjM4IDguODMsNy43NSAyLjc4LDAgNS4wMywyLjI2IDUuMDMsNS4wMyAwLDIuNzQgLTIuMTksNC45NyAtNC45MSw1LjAzbC0wLjEyIDAgLTAuMDcgMCAtOC42NyAwIC0wLjA5IDAgLTAuMTIgMCAtMTMuNTYgMCAtMC4xMyAwIC0wLjE0IDAgLTEyLjY2IDB6Ii8+PHBhdGggY2xhc3M9ImZpbDIiIGQ9Ik01NS41MiAzOS44NWMwLjYsMC4zNCAwLjgsMS4xMSAwLjQ2LDEuNyAtMC4zNCwwLjYgLTEuMSwwLjggLTEuNywwLjQ2bC0xLjczIC0xYy0wLjU5LC0wLjM0IC0wLjgsLTEuMSAtMC40NiwtMS43IDAuMzUsLTAuNTkgMS4xMSwtMC44IDEuNywtMC40NmwxLjczIDF6bS0zNS4xOCAtMTcuNDRjLTAuNiwtMC4zNCAtMC44LC0xLjEgLTAuNDYsLTEuNyAwLjM0LC0wLjU5IDEuMSwtMC44IDEuNywtMC40NmwxLjczIDFjMC41OSwwLjM0IDAuOCwxLjEgMC40NSwxLjcgLTAuMzQsMC42IC0xLjEsMC44IC0xLjY5LDAuNDZsLTEuNzMgLTF6bTYuNzEgLTcuNjNjLTAuMzQsLTAuNiAtMC4xMywtMS4zNiAwLjQ2LC0xLjcgMC42LC0wLjM0IDEuMzYsLTAuMTQgMS43LDAuNDZsMSAxLjczYzAuMzQsMC41OSAwLjEzLDEuMzYgLTAuNDYsMS43IC0wLjYsMC4zNCAtMS4zNiwwLjEzIC0xLjcsLTAuNDZsLTEgLTEuNzN6bTkuNjMgLTMuMjVjMCwtMC42OSAwLjU2LC0xLjI1IDEuMjUsLTEuMjUgMC42OSwwIDEuMjUsMC41NiAxLjI1LDEuMjVsMCAyYzAsMC42OSAtMC41NiwxLjI1IC0xLjI1LDEuMjUgLTAuNjksMCAtMS4yNSwtMC41NiAtMS4yNSwtMS4yNWwwIC0yem05Ljk3IDJjMC4zNSwtMC41OSAxLjExLC0wLjc5IDEuNywtMC40NSAwLjYsMC4zNSAwLjgsMS4xMSAwLjQ2LDEuN2wtMSAxLjczYy0wLjM1LDAuNiAtMS4xMSwwLjggLTEuNzEsMC40NiAtMC41OSwtMC4zNSAtMC43OSwtMS4xMSAtMC40NSwtMS43MWwxIC0xLjczem03LjYzIDYuNzJjMC42LC0wLjM0IDEuMzYsLTAuMTMgMS43LDAuNDYgMC4zNCwwLjYgMC4xNCwxLjM2IC0wLjQ2LDEuN2wtMS43MyAxYy0wLjU5LDAuMzQgLTEuMzUsMC4xNCAtMS43LC0wLjQ2IC0wLjM0LC0wLjYgLTAuMTMsLTEuMzYgMC40NiwtMS43bDEuNzMgLTF6bTMuMjUgOS42M2MwLjY5LDAgMS4yNSwwLjU2IDEuMjUsMS4yNSAwLDAuNjkgLTAuNTYsMS4yNSAtMS4yNSwxLjI1bC0yIDBjLTAuNjksMCAtMS4yNSwtMC41NiAtMS4yNSwtMS4yNSAwLC0wLjY5IDAuNTYsLTEuMjUgMS4yNSwtMS4yNWwyIDB6Ii8+PC9nPjwvZz48L3N2Zz4=';

export {WEATHER_PLUGIN_LOGO_BASE64};
