import React from 'react';
import EventScheduleEntryView from './event_schedule_entryview';

const EventSchedule = (props) => {
  let items = props.events.map((event) => {
    return (
    <EventScheduleEntryView
      mainEvent = {event}
      key={event._id}
      event={event.eventName}
      id={event._id}
      onEventDelete = { props.onEventDelete }
    />
    );
  });
  return (
    <ul style={{ listStyleType: 'none' }} className="col-sm-2">
      {items}
    </ul>
  );
};

export default EventSchedule;
