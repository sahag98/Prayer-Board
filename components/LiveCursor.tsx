import { LiveCursorProps } from "@/app/BoardPage";
import { Cursor } from "@/app/Cursor";
import { COLORS } from "@/constants";

// display all other live cursors
const LiveCursors = ({ others }: LiveCursorProps) => {
  return others.map(({ connectionId, presence }) => {
    if (presence == null || !presence?.cursor) {
      return null;
    }

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
      />
    );
  });
};

export default LiveCursors;
